// Hotel.js

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const defaultImageSrc = '/Images/admindefaultimage.png';
const initialFieldValues = {
    hotelId: 0,
    hotelName: '',
    hotelDescription: '',
    ratings: '',
    pricePerPerson: '',
    hotelRoomsAvailable: '',
    hotelLocation: '',
    foodType: '',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null,
};

export default function Hotel(props) {
    const { addOrEdit, recordForEdit } = props;

    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (recordForEdit != null) setValues(recordForEdit);
    }, [recordForEdit]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const showPreview = (e) => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result,
                });
            };
            reader.readAsDataURL(imageFile);
        } else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc,
            });
        }
    };

    const validate = () => {
        let temp = {};
        temp.hotelName = values.hotelName !== '';
        temp.imageSrc = values.imageSrc !== defaultImageSrc;
        setErrors(temp);
        return Object.values(temp).every((x) => x);
    };

    const resetForm = () => {
        setValues(initialFieldValues);
        document.getElementById('image-uploader').value = null;
        setErrors({});
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData();
            formData.append('hotelId', values.hotelId);
            formData.append('hotelName', values.hotelName);
            formData.append('hotelDescription', values.hotelDescription);
            formData.append('ratings', values.ratings);
            formData.append('pricePerPerson', values.pricePerPerson);
            formData.append('hotelRoomsAvailable', values.hotelRoomsAvailable);
            formData.append('foodType', values.foodType);
            formData.append('hotelLocation', values.hotelLocation);
            formData.append('imageName', values.imageName);
            formData.append('imageFile', values.imageFile);
            addOrEdit(formData, resetForm);
        }
    };

    const applyErrorClass = (field) => (field in errors && !errors[field] ? ' invalid-field' : '');

    return (
        <div>
            <div className="container text-center">
                {/* You can add any additional content here */}
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                    <img src={values.imageSrc} className="card-img-top" style={{ width: '200px', height: '200px', textAlign: 'center' }} alt="Preview" />
                    <div className="card-body">
                        <div className="form-group">
                            <input
                                type="file"
                                accept="image/*"
                                className={'form-control-file' + applyErrorClass('imageSrc')}
                                onChange={showPreview}
                                id="image-uploader"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className={'form-control' + applyErrorClass('hotelName')}
                                placeholder="Hotel Name"
                                name="hotelName"
                                value={values.hotelName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Hotel Description"
                                name="hotelDescription"
                                value={values.hotelDescription}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Ratings"
                                name="ratings"
                                value={values.ratings}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Price Per Person"
                                name="pricePerPerson"
                                value={values.pricePerPerson}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Hotel Rooms Available"
                                name="hotelRoomsAvailable"
                                value={values.hotelRoomsAvailable}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Food Type"
                                name="foodType"
                                value={values.foodType}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Hotel Location"
                                name="hotelLocation"
                                value={values.hotelLocation}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}


