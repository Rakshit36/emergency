export const SelectTravelsList=[
    {
        id:1,
        title:'Solo',
        desc:'A sole travels in exploration',
        icon:'🧳',
        people:'1 person'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2 people'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of Family friendly activities',
        icon:'👨‍👩‍👦‍👦',
        people:'3 to 5 people'
    },
    {
        id:4,
        title:'Friend',
        desc:'A bunch of thrill-seeks',
        icon:'🔥',
        people:'5 to 10 people'
    },
]

export const SelectBudgetOptions=[
    
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'🪙',
       
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💸',
       
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about the cost ',
        icon:'💰',
       
    },
] 
export const AI_PROMPT = 
  'Generate a travel plan for the location: {location} for {totalDays} days for a {traveler} traveler with a {budget} budget. Provide a list of hotel options, including hotel name, address, price, image URL, geo-coordinates, rating, and description. Additionally, suggest ticket prices and travel times for each location, along with a detailed day-by-day itinerary, highlighting the best times to visit. Format the response in JSON.';
