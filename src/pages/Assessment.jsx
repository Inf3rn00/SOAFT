import React, { useState, useMemo, useEffect } from 'react';
import { Plus, Trash2, Edit2, X, ChevronDown, ChevronLeft, ChevronRight, FileText, Clock, MoreVertical, Filter } from 'lucide-react';
import { useSelector } from 'react-redux';
import { formatDate } from '../utils/timeUtils';

const AssessmentContent = () => {
  const initialAssessments = useSelector((state) => state.initialAssessments);

  // --- STATE ---
  const [assessments, setAssessments] = useState(initialAssessments);
  const [activeTab, setActiveTab] = useState('All'); // All, Active, Draft, Completed
  const [activeCourse, setActiveCourse] = useState('All Courses');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortOrder, setSortOrder] = useState('recent'); // 'recent' or 'oldest'

  const itemsPerPage = 5;

  // --- HELPERS ---
  const getUniqueCourses = () => ['All Courses', ...new Set(initialAssessments.map(a => a.course))];
  
  

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed': return 'bg-blue-100 text-blue-600';
      case 'Up Coming': return 'bg-orange-100 text-orange-600';
      case 'In Progress': return 'bg-green-100 text-green-600';
      case 'Draft': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  // --- LOGIC: FILTERING & SORTING ---
  const filteredData = useMemo(() => {
    let data = assessments;

    // 1. Tab Filter
    if (activeTab === 'Active') {
      data = data.filter(item => ['In Progress', 'Up Coming'].includes(item.status));
    } else if (activeTab === 'Draft') {
      data = data.filter(item => item.status === 'Draft');
    } else if (activeTab === 'Completed') {
      data = data.filter(item => item.status === 'Completed');
    }

    // 2. Course Filter
    if (activeCourse !== 'All Courses') {
      data = data.filter(item => item.course === activeCourse);
    }

    // 3. Sorting
    data = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'recent' ? dateB - dateA : dateA - dateB;
    });

    return data;
  }, [assessments, activeTab, activeCourse, sortOrder]);

  // --- LOGIC: PAGINATION ---
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
    setSelectedItems([]); // Clear selection on filter change
  }, [activeTab, activeCourse]);

  // --- HANDLERS ---
  const toggleSelectAll = () => {
    if (selectedItems.length === currentData.length && currentData.length > 0) {
      setSelectedItems([]);
    } else {
      setSelectedItems(currentData.map(item => item.id));
    }
  };

  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleDelete = () => {
    if (selectedItems.length === 0) return;
    if (window.confirm(`Are you sure you want to delete ${selectedItems.length} items?`)) {
      setAssessments(assessments.filter(item => !selectedItems.includes(item.id)));
      setSelectedItems([]);
    }
  };

  const handleDeleteSingle = (id) => {
    if (window.confirm("Delete this assessment?")) {
      setAssessments(assessments.filter(item => item.id !== id));
    }
  };

  return (
    <div className="flex-1 bg-gray-50 p-6 md:p-8 h-full overflow-y-auto font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            Assessment
            <span className="text-sm font-normal text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-md shadow-sm">
              {filteredData.length} Total
            </span>
          </h1>
          <p className="text-gray-500 mt-1 text-sm">Create, manage and monitor all your assessment in one place</p>
        </div>
        <button 
          onClick={() => alert("Create Test Modal Triggered")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-sm hover:shadow-md active:scale-95"
        >
          <Plus size={18} strokeWidth={2.5} />
          <span className="font-medium">Create test</span>
        </button>
      </div>

      {/* --- CONTROLS SECTION --- */}
      <div className="space-y-6 mb-6">
        
        {/* Filters (Chips) */}
        <div className="flex flex-wrap gap-3">
          {/* Course Dropdown Simulator */}
          <div className="relative group">
            <div className="bg-white border border-gray-200 rounded-full px-4 py-1.5 flex items-center gap-2 text-sm text-gray-600 shadow-sm cursor-pointer hover:border-indigo-300 transition-colors">
              <span className="text-gray-400">Course:</span> 
              <span className="font-medium text-gray-800">{activeCourse}</span>
              <ChevronDown size={14} />
            </div>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-lg p-1 hidden group-hover:block z-10">
              {getUniqueCourses().map(course => (
                <button 
                  key={course}
                  onClick={() => setActiveCourse(course)}
                  className={`w-full text-left px-3 py-2 text-sm rounded-lg ${activeCourse === course ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {course}
                </button>
              ))}
            </div>
          </div>

          {/* Date Filter (Static Visual) */}
          <div className="bg-white border border-gray-200 rounded-full px-4 py-1.5 flex items-center gap-2 text-sm text-gray-600 shadow-sm cursor-pointer hover:border-indigo-300">
            <span className="text-gray-400">Date:</span> 
            <span className="font-medium text-gray-800">Last 30 days</span>
            <X size={14} className="ml-1 hover:text-red-500" onClick={(e) => { e.stopPropagation(); alert("Date filter reset"); }} />
          </div>
        </div>

        {/* Tabs & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex bg-gray-200/50 p-1 rounded-xl w-full sm:w-auto overflow-x-auto">
            {['All', 'Active', 'Draft', 'Completed'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => setSortOrder(prev => prev === 'recent' ? 'oldest' : 'recent')}
            className="flex items-center gap-2 text-gray-600 text-sm border border-gray-200 bg-white px-4 py-2 rounded-xl shadow-sm hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center"
          >
            <Clock size={16} />
            Sort: {sortOrder === 'recent' ? 'Recent' : 'Oldest'}
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* --- TABLE SECTION --- */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col min-h-[500px]">
        
        {/* Table Toolbar */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-3">
            <input 
              type="checkbox" 
              checked={selectedItems.length === currentData.length && currentData.length > 0}
              onChange={toggleSelectAll}
              className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" 
            />
            <span className="text-sm font-medium text-gray-700">Select all</span>
            {selectedItems.length > 0 && (
              <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
                {selectedItems.length} selected
              </span>
            )}
          </div>
          <button 
            onClick={handleDelete}
            disabled={selectedItems.length === 0}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border transition-colors ${
              selectedItems.length > 0 
                ? 'text-red-500 bg-red-50 border-red-100 hover:bg-red-100 cursor-pointer' 
                : 'text-gray-300 bg-gray-50 border-gray-100 cursor-not-allowed'
            }`}
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
          <div className="col-span-5 pl-8">Assessment</div>
          <div className="col-span-2">Course</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-2 text-center">Completion</div>
        </div>

        {/* Table Body */}
        <div className="flex-1 divide-y divide-gray-50">
          {currentData.length > 0 ? (
            currentData.map((item) => (
              <div 
                key={item.id} 
                className={`group grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center transition-all duration-200 ${
                  selectedItems.includes(item.id) ? 'bg-indigo-50/30' : 'hover:bg-gray-50'
                }`}
              >
                
                {/* Column 1: Checkbox + Icon + Details */}
                <div className="col-span-1 md:col-span-5 flex items-start gap-4">
                  <div className="flex items-center h-full pt-1">
                     <input 
                      type="checkbox" 
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelectItem(item.id)}
                      className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer" 
                    />
                  </div>
                  <div className={`p-2.5 rounded-xl flex-shrink-0 ${item.iconColor}`}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 leading-tight">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                       <span className="text-xs text-gray-500">
                        {item.questions ? `${item.questions} Questions` : 'Assignment'}
                       </span>
                       <span className="text-gray-300 text-[10px]">•</span>
                       <span className="text-xs text-gray-500 flex items-center gap-1">
                         <Clock size={10} />
                         {item.duration || 'No Limit'}
                       </span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Course */}
                <div className="col-span-1 md:col-span-2 pl-8 md:pl-0">
                  <p className="text-sm font-medium text-gray-700">{item.course}</p>
                </div>

                {/* Column 3: Date */}
                <div className="col-span-1 md:col-span-2 pl-8 md:pl-0">
                  <p className="text-sm font-semibold text-gray-900">{formatDate(item.date)}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.time}</p>
                </div>

                {/* Column 4: Status */}
                <div className="col-span-1 md:col-span-1 pl-8 md:pl-0 flex items-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${getStatusStyle(item.status)}`}>
                    {item.status}
                  </span>
                </div>

                {/* Column 5: Completion Bar + Actions */}
                <div className="col-span-1 md:col-span-2 flex items-center justify-between gap-4 pl-8 md:pl-0">
                  <div className="flex-1 flex items-center gap-3">
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${item.progress === 100 ? 'bg-blue-500' : item.progress > 0 ? 'bg-green-500' : 'bg-gray-300'}`} 
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-600 w-8 text-right">{item.progress}%</span>
                  </div>

                  {/* Hover Actions */}
                  <div className="flex gap-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleDeleteSingle(item.id)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={16} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <Edit2 size={16} />
                    </button>
                  </div>
                </div>

              </div>
            ))
          ) : (
            <div className="h-64 flex flex-col items-center justify-center text-gray-400">
              <div className="bg-gray-50 p-4 rounded-full mb-3">
                <Filter size={32} />
              </div>
              <p>No assessments found matching your filters.</p>
              <button 
                onClick={() => { setActiveTab('All'); setActiveCourse('All Courses'); }}
                className="mt-2 text-indigo-600 text-sm hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
        
        {/* --- FOOTER / PAGINATION --- */}
        <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredData.length > 0 ? startIndex + 1 : 0}</span> to <span className="font-medium">{Math.min(startIndex + itemsPerPage, filteredData.length)}</span> Out of <span className="font-medium">{filteredData.length}</span>
          </p>
          
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 border border-gray-200 rounded-lg hover:bg-white bg-white text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronLeft size={16} />
            </button>
            
            {/* Dynamic Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
               <button 
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                  currentPage === page 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                    : 'hover:bg-white text-gray-600 hover:shadow-sm'
                }`}
              >
                {page}
              </button>
            ))}

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages || totalPages === 0}
              className="p-2 border border-gray-200 rounded-lg hover:bg-white bg-white text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AssessmentContent;