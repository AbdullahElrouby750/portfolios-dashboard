const convertToFormData = (dataObj = {}) => {
    const formData = new FormData();

    Object.entries(dataObj).forEach(([key, value]) => {
        if (value === undefined) return; // skip undefined
        if (value instanceof File) {
            formData.append(key, value);
        } else if (typeof value === 'object' && value !== null) {
            formData.append(key, JSON.stringify(value)); // serialize objects/arrays
        } else {
            formData.append(key, value);
        }
    });

    
    console.log('formData:: ', [...formData.entries()]); // Log entries for debugging

    return formData;
};

export default convertToFormData;