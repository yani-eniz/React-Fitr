import React from "react";
import Animation from "../../animation";
import logo from '../../img/img_logo.png';
import ReactFullpage from '@fullpage/react-fullpage';


const MainPage = () => {
    Animation();

    return (
        <div className={'container'}>
            <svg id="logo" className="logo" width="343" height="103" viewBox="0 0 343 103" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M50.344 49.304C53.992 49.88 57.304 51.368 60.28 53.768C63.352 56.168 65.752 59.144 67.48 62.696C69.304 66.248 70.216 70.04 70.216 74.072C70.216 79.16 68.92 83.768 66.328 87.896C63.736 91.928 59.944 95.144 54.952 97.544C50.056 99.848 44.248 101 37.528 101H0.0880127V0.632004H36.088C42.904 0.632004 48.712 1.784 53.512 4.088C58.312 6.296 61.912 9.32 64.312 13.16C66.712 17 67.912 21.32 67.912 26.12C67.912 32.072 66.28 37.016 63.016 40.952C59.848 44.792 55.624 47.576 50.344 49.304ZM13.192 43.976H35.224C41.368 43.976 46.12 42.536 49.48 39.656C52.84 36.776 54.52 32.792 54.52 27.704C54.52 22.616 52.84 18.632 49.48 15.752C46.12 12.872 41.272 11.432 34.936 11.432H13.192V43.976ZM36.376 90.2C42.904 90.2 47.992 88.664 51.64 85.592C55.288 82.52 57.112 78.248 57.112 72.776C57.112 67.208 55.192 62.84 51.352 59.672C47.512 56.408 42.376 54.776 35.944 54.776H13.192V90.2H36.376Z"
                    stroke="white" strokeWidth="5"/>
                <path
                    d="M167.313 101H154.209L101.505 21.08V101H88.4005V0.488007H101.505L154.209 80.264V0.488007H167.313V101Z"
                    stroke="white" strokeWidth="5"/>
                <path d="M251.427 0.632004V11.288H224.067V101H210.963V11.288H183.459V0.632004H251.427Z"
                      stroke="white" strokeWidth="5"/>
                <path
                    d="M280.373 0.632004V64.136C280.373 73.064 282.533 79.688 286.853 84.008C291.269 88.328 297.365 90.488 305.141 90.488C312.821 90.488 318.821 88.328 323.141 84.008C327.557 79.688 329.765 73.064 329.765 64.136V0.632004H342.869V63.992C342.869 72.344 341.189 79.4 337.829 85.16C334.469 90.824 329.909 95.048 324.149 97.832C318.485 100.616 312.101 102.008 304.997 102.008C297.893 102.008 291.461 100.616 285.701 97.832C280.037 95.048 275.525 90.824 272.165 85.16C268.901 79.4 267.269 72.344 267.269 63.992V0.632004H280.373Z"
                    stroke="white" strokeWidth="5"/>
            </svg>
           {/* <div className="wrapper">
                <div className="page-header">
                    <img src={logo} alt={logo}/>
                </div>
                <div className="page-title">
                    <span>Белорусский национальный технический университет</span>
                </div>
            </div>
                <div className="page-content__buttons" style={{"visibility": "hidden"}}>*/}
               {/* <button className="col-sm-2 test" onClick={this.clickTimetable}>Расписание <br/> занятий</button>
                <button className="col-sm-2" onClick={this.clickExams}>Расписание <br/> экзаменов</button>
                <button className="col-sm-2">заселение в <br/> общежитие</button>
                <button className="col-sm-2">оплата</button>
                <button className="col-sm-2" onClick={this.clickPassingPoints}>Проходные <br/> баллы</button>*/}
            </div>

    )
};

export default MainPage;