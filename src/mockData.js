/* eslint-disable */

export const mockEventData = {
  "last_item": null,
  "total_items": "9621",
  "first_item": null,
  "page_number": "1",
  "page_size": "10",
  "page_items": null,
  "search_time": "0.049",
  "page_count": "963",
  "events": {
    "event": [
      {
        "watching_count": null,
        "olson_path": "America/Denver",
        "calendar_count": null,
        "comment_count": null,
        "region_abbr": "CO",
        "postal_code": null,
        "going_count": null,
        "all_day": "0",
        "latitude": "39.7392358",
        "groups": null,
        "url": "http://denver.eventful.com/events/thursday-work-day-july-5-multiple-neighborhoods-/E0-001-111209195-8?utm_source=apis&utm_medium=apim&utm_campaign=apic",
        "id": "E0-001-111209195-8",
        "privacy": "1",
        "city_name": "Denver",
        "link_count": null,
        "longitude": "-104.990251",
        "country_name": "United States",
        "country_abbr": "USA",
        "region_name": "Colorado",
        "start_time": "2018-07-05 09:00:00",
        "tz_id": null,
        "description": " <strong>Sponsored by:</strong> Extreme Community Makeover<br> <strong>Minimum age:</strong> 14<br> Extreme Community Makeover (ECM) is designed to invite volunteers into a partnership with residents of specific Denver neighborhoods to complete home and neighborhood improvement projects. These projects include graffiti removal, landscaping, painting, yard work, or other projects identified by the . . .",
        "modified": "2018-02-19 06:12:10",
        "venue_display": "0",
        "tz_country": null,
        "performers": null,
        "title": "Thursday Work Day, July 5 - Multiple Neighborhoods",
        "venue_address": "Denver, Colorado, United States",
        "geocode_type": "EVDB Geocoder",
        "tz_olson_path": null,
        "recur_string": null,
        "calendars": null,
        "owner": "evdb",
        "going": null,
        "country_abbr2": "US",
        "image": null,
        "created": "2018-02-01 04:56:32",
        "venue_id": "V0-001-000179395-7",
        "tz_city": null,
        "stop_time": null,
        "venue_name": "Denver, Colorado, United States",
        "venue_url": "http://denver.eventful.com/venues/denver-colorado-united-states-/V0-001-000179395-7?utm_source=apis&utm_medium=apim&utm_campaign=apic"
      }
    ]
  }
}

export const mockCleanEventData = {
  "E0-001-111209195-8": {
    title: "Thursday Work Day, July 5 - Multiple Neighborhoods",
    description: " <strong>Sponsored by:</strong> Extreme Community Makeover<br> <strong>Minimum age:</strong> 14<br> Extreme Community Makeover (ECM) is designed to invite volunteers into a partnership with residents of specific Denver neighborhoods to complete home and neighborhood improvement projects. These projects include graffiti removal, landscaping, painting, yard work, or other projects identified by the . . .",
    category: "music",
    venueName: "Denver, Colorado, United States", 
    region: "CO",
    postalCode: null,
    city: "Denver",
    startTime: "2018-07-05 09:00:00",
    venueAddress: "Denver, Colorado, United States",
    image: null,
    url: "http://denver.eventful.com/events/thursday-work-day-july-5-multiple-neighborhoods-/E0-001-111209195-8?utm_source=apis&utm_medium=apim&utm_campaign=apic",
    id: "E0-001-111209195-8"
  }
};

export const mockCleanSearchData = {
  "E0-001-111209195-8": {
    title: "Thursday Work Day, July 5 - Multiple Neighborhoods",
    description: " <strong>Sponsored by:</strong> Extreme Community Makeover<br> <strong>Minimum age:</strong> 14<br> Extreme Community Makeover (ECM) is designed to invite volunteers into a partnership with residents of specific Denver neighborhoods to complete home and neighborhood improvement projects. These projects include graffiti removal, landscaping, painting, yard work, or other projects identified by the . . .",
    category: "search",
    venueName: "Denver, Colorado, United States", 
    region: "CO",
    postalCode: null,
    city: "Denver",
    startTime: "2018-07-05 09:00:00",
    venueAddress: "Denver, Colorado, United States",
    image: null,
    url: "http://denver.eventful.com/events/thursday-work-day-july-5-multiple-neighborhoods-/E0-001-111209195-8?utm_source=apis&utm_medium=apim&utm_campaign=apic",
    id: "E0-001-111209195-8"
  }
};

export const mockSingleEvent = {
    title: "Thursday Work Day, July 5 - Multiple Neighborhoods",
    description: " <strong>Sponsored by:</strong> Extreme Community Makeover<br> <strong>Minimum age:</strong> 14<br> Extreme Community Makeover (ECM) is designed to invite volunteers into a partnership with residents of specific Denver neighborhoods to complete home and neighborhood improvement projects. These projects include graffiti removal, landscaping, painting, yard work, or other projects identified by the . . .",
    category: "music",
    venueName: "Denver, Colorado, United States", 
    region: "CO",
    postalCode: null,
    city: "Denver",
    startTime: "2018-07-05 09:00:00",
    venueAddress: "Denver, Colorado, United States",
    image: null,
    url: "http://denver.eventful.com/events/thursday-work-day-july-5-multiple-neighborhoods-/E0-001-111209195-8?utm_source=apis&utm_medium=apim&utm_campaign=apic",
    id: "E0-001-111209195-8"
  }

export const mockEventDataArray = [
  {
    title: "Thursday Work Day, July 5 - Multiple Neighborhoods",
    description: " <strong>Sponsored by:</strong> Extreme Community Makeover<br> <strong>Minimum age:</strong> 14<br> Extreme Community Makeover (ECM) is designed to invite volunteers into a partnership with residents of specific Denver neighborhoods to complete home and neighborhood improvement projects. These projects include graffiti removal, landscaping, painting, yard work, or other projects identified by the . . .",
    category: "music",
    venueName: "Denver, Colorado, United States", 
    region: "CO",
    postalCode: null,
    city: "Denver",
    startTime: "2018-07-05 09:00:00",
    venueAddress: "Denver, Colorado, United States",
    image: null,
    url: "http://denver.eventful.com/events/thursday-work-day-july-5-multiple-neighborhoods-/E0-001-111209195-8?utm_source=apis&utm_medium=apim&utm_campaign=apic",
    id: "E0-001-111209195-8"
  }
]

export const mockGeocodeData = {
  "results": [
      {
          "address_components": [
              {
                  "long_name": "Denver",
                  "short_name": "Denver",
                  "types": [
                      "locality",
                      "political"
                  ]
              },
              {
                  "long_name": "Denver County",
                  "short_name": "Denver County",
                  "types": [
                      "administrative_area_level_2",
                      "political"
                  ]
              },
              {
                  "long_name": "Colorado",
                  "short_name": "CO",
                  "types": [
                      "administrative_area_level_1",
                      "political"
                  ]
              },
              {
                  "long_name": "United States",
                  "short_name": "US",
                  "types": [
                      "country",
                      "political"
                  ]
              }
          ],
          "formatted_address": "Denver, CO, USA",
          "geometry": {
              "bounds": {
                  "northeast": {
                      "lat": 39.91424689999999,
                      "lng": -104.6002959
                  },
                  "southwest": {
                      "lat": 39.614431,
                      "lng": -105.109927
                  }
              },
              "location": {
                  "lat": 39.7392358,
                  "lng": -104.990251
              },
              "location_type": "APPROXIMATE",
              "viewport": {
                  "northeast": {
                      "lat": 39.91424689999999,
                      "lng": -104.6002959
                  },
                  "southwest": {
                      "lat": 39.614431,
                      "lng": -105.109927
                  }
              }
          },
          "place_id": "ChIJzxcfI6qAa4cR1jaKJ_j0jhE",
          "types": [
              "locality",
              "political"
          ]
      }
  ],
  "status": "OK"
}

export const mockCleanGeocodeData = {
  address: "Denver, CO, USA",
  coordinates: {
    "lat": 39.7392358,
    "lng": -104.990251
  }
}

export const mockGeolocationData = {
  "location": {
        "lat": 39.7380371,
        "lng": -105.02651949999999
  },
  "accuracy": 84452
}