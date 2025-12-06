
export const submittedTime = (timeStamp) => {
  // Declare an instant time with a timestamp input
  const now = new Date(timeStamp);
  // Format the instant time to a more readable format
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    minute: "2-digit",
    hour: "2-digit",
    hour12: true,
  };
  const format = now
    .toLocaleString("en-US", options)
    .replace("at", "")
    .replace(",", "")
    .split(" "); // Splitting the formatted string into an array
  // Mapping the array to an object for easier access to each component
  const timeData = [
    {
      month: format[0],
      day: format[1],
      year: format[2],
      time: format[4],
      form: format[5],
    },
  ];
  // Returning the formatted time data
  return timeData;
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };