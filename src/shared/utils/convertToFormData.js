const convertToFormData = (dataObj = {}) => {
    console.log('dataObj:: ', dataObj);
    const formData = new FormData();

    Object.entries(dataObj).forEach(([key, value]) => {
        if (value instanceof File) {
            formData.append(key, value); // Append File object directly
        } else {
            formData.append(key, value); // Append other values as strings
        }
    });

    return formData;
};

export default convertToFormData;