export default function CardComponent(props) {
    const { size, cardInfo } = props;
    const { name, image_uris } = cardInfo;
    let cardImage;
    switch(size) {
        case 'small':
            cardImage = image_uris.small;
            break;
        case 'medium':
            cardImage = image_uris.normal;
            break;
        case 'big':
            cardImage = image_uris.large;
            break;
        default:
            cardImage = image_uris.border_crop;
            break;
    };
    
    return(
        <div>
            <img src={cardImage} alt='' />
            <h1>{name}</h1>
        </div>
    );
};