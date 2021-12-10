export const url = "https://jobs-api.squareboat.info/api/v1";

export const setHeaders = () => {
  const headers = {
    headers: {
      "Authorization": localStorage.getItem("token"),
    },
    
  };

  return headers;
};
