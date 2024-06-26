import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
const OpenImg = ({ index, imageUrl, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (index || imageUrl) {
            setIsOpen(true);
        }
    }, [index, imageUrl]);

    const images =
        imageUrl ?
            [{ src: imageUrl, alt: 'immagine stanza' }]
            :
            index.map((url) => ({
                src: url,
                alt: 'immagine stanza',
            }));

    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <Lightbox
            open={isOpen}
            close={handleClose}
            slides={images}
        />
    );
};

export default OpenImg;
