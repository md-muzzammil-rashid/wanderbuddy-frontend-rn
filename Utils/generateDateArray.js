function generateDateArray(startDate, n) {
    // Parse the start date
    const start = new Date(startDate);
    
    // Initialize the array to hold the date objects
    const dateArray = [];
  
    for (let i = 0; i < n; i++) {
      // Create a new date object incremented by i days from the start date
      const currentDate = new Date(start);
      currentDate.setDate(start.getDate() + i);
  
      // Format the date to 'YYYY-MM-DD'
      const formattedDate = currentDate.toISOString().split('T')[0];
  
      // Push the day number and date into the array
      dateArray.push({
        day: i + 1,
        date: formattedDate
      });
    }
  
    return dateArray;
  }

  export default generateDateArray