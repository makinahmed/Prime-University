import React from 'react';

const Banner = () => {
    // const style = {{ 'marginTop': "100px", 'height': '200px', 'width': '100%'}
    const backgroundImg = {
        "height": '600px',
        'width': "1350px",

    }
    // "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))",

    return (
        <div>
            <div style={backgroundImg}>
                <img
                    style={{
                        'width': '100%',
                        'height': '100%',
                        'opacity': '.8'
                    }}

                    src={`https://worldscholarshipforum.com/wp-content/uploads/2020/11/cambridge-university-tuition.jpg`} alt="" />
            </div>
        </div>
    );

}
export default Banner;