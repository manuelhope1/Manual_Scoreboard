import React, {useState} from 'react';
export default function Teamlogo ()
{

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

    return (
    <div className='teamb'>
        <input type="file"
                className='himginput'
                name="file"
                placeholder="upload"
                onChange={uploadImage}
            />
        <div className='teamcir'>
            {loading ? (<h3 className='loading'>Loading...</h3>)
             : (
                <img src={image} className="tlogo"/>
             )
            }
        </div>
    </div>
    );
}