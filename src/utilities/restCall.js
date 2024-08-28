
export async function fetchRequest(url, options = {}, errorCallback = console.error) {

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      if (response.status === 404) throw new Error('404, Not found');
      if (response.status === 500) throw new Error('500, internal server error');
      //other server error
      throw new Error(`Feth failed ${response.status} ${response.statusText}`);
    }
    const data = await response.json()
    // console.log('result.data', data)
    return data;
  } catch (error) {
    errorCallback(error);
    
    return error;
  }

}
