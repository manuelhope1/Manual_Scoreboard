import React, {useState} from 'react';

export default function League (){
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dpk8alrbk/image/upload',
            {
                method: 'POST',
                body: data
            }
        ) 
        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
    }
    return(
        <>
            <input type="file"
                className='limginput'
                name="file"
                placeholder="upload"
                onChange={uploadImage}
            />
            {loading ? (<h3 className='loading'>Loading...</h3>)
             : (
                <img src={image} className="clogo"/>
             )
            }
        </>
        
    );
}