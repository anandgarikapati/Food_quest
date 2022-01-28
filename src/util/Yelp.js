const apiKey = 'Yz7-n0ScD2vhIA7TJ_ErRi2jslsjJze-YrEKsdLQZfAemt_xXpBbGHb7twT2D4szEXIqx0TkeDhO1ZzbCooSu1ADsrE1coI7KSl0d6YKdzU0RncX45VTwq5DwbNxX3Yx'
const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Access-Control-Allow-Origin':'*'
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonResponse) => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    console.log(business)
                    return {
                       
                        // id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,

                        phone: business.phone,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        
    

                    }
                })
            }
        })
    }
}

export default  Yelp