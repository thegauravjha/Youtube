import '../shrimmer.css';

const Shrimmer = () => {
    const numCards = 15; // Number of cards to display

    return (
        <div className="shrimmer_container">
            {Array.from({ length: numCards }).map((_, index) => (
                <div className="shrimmer-card" key={index}>
                    <div className="shrimmer-image">
                        <span className="loader-element"></span>
                    </div>
                    <div className="shrimmer-name">
                        <span className="loader-element"></span>
                    </div>
                    <div className="shrimmer-info">
                        <span className="loader-element"></span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Shrimmer;
