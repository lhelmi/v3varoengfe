export const isSuccess = (status) => {
    const arr = [
        200, 201
    ];
    return arr.includes(status);
}

export const response = (arr, statusCode) => {
    let status = 'success';
    if(!isSuccess(statusCode)) status = 'error';
   return {
    status : status,
    statusCode : statusCode,
    data : arr
   }
}