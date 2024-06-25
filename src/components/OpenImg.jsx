import SetImg from '../../img.json';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const OpenImg = ({ isOpen, index, onClose }) => {
    const imageData = SetImg[index];
    const images = imageData.imageUrl.map((imageUrl) => ({
        src: imageUrl,
        alt: 'immagine stanza',
    }));

    const handleClose = () => {
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
