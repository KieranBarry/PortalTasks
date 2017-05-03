# PortalTasks

For Task2, I chose to use an array of objects, as this is the most modular and simplistic way of implmementing this that I 
could think of. By doing so, anyone can easily add more data points with limited risk of throwing off the algorithm. 

// Additions after time was up: //

This algorithm is relatiely straight-forward. It iterates through the array of calendar events and checks if each conflicts
with any other event using simple interval algebra. It runs in O(n^2), but it does not compare any two events twice (which
would have been the case had I iterated all the way through the array twice). 

Here are a few considerations:
  - The current data points do not specify a timezone, so in order to compare across timezones, this would have to be adjusted.
  - My program does not check for invalid input, so any dates and times input must be properaly formatted.
  - My algoritm does not consider two events that start and end at the exact same time to conflict, so if this is not the desired outcome, I would have to make minor adjustments.
 
If given more time, I would have first adressed these two concerns, as they would have been relatively simple fixes. I also
would have had the algoritm print out which events conflict with which, as this would have been easy and I believe would have
made the application a bit more practical.

Thanks!
