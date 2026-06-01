import { keysToSnakeCase } from "neetocist";
import { isEmpty, omit, pipe, toPairs } from "ramda";

export const buildUrl = (route, params) => {
  const placeHolders = [];
  toPairs(params).forEach(([key, value]) => {
    if (route.includes(`:${key}`)) {
      placeHolders.push(key);
      route = route.replace(`:${key}`, encodeURIComponent(value));
    }
  });

  const queryParams = pipe(omit(placeHolders), keysToSnakeCase)(params);

  return isEmpty(queryParams) ? route : `${route}?${queryParams}`;
};
