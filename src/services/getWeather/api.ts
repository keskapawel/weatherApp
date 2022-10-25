import { api } from 'services/api';
import { BASE_TAGS } from 'services/tags';

import { IWeatherModel } from 'models/WeatherModel';

import { API_KEY } from './constants';

export const getWeatherApi = api.injectEndpoints({
  endpoints: (build) => ({
    getWeather: build.query<IWeatherModel, { location: string }>({
      query: ({ location }) => ({
        url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`,
      }),
      // providesTags: [BASE_TAGS.UNIT_OF_MEASURES],
    }),
  }),
  overrideExisting: false,
});

export const { useGetWeatherQuery } = getWeatherApi;
