import classNames from "classnames/bind";
import styles from "./SignUp.module.scss"
import InputSignUp from "~/component/InputSignUp/InputSignUp";
import OVSignUp from "~/component/OverviewSignUp/OVSignUp";
const cx=classNames.bind(styles)
const ovContent = {
    video1: {
        frame: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
        video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
        h2: "Thưởng thức trên TV của bạn.",
        p:"Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác."
    },
    pic1:{
        img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
        h2: "Tải xuống nội dung để xem ngoại tuyến.",
        p: "Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem."
    },
    video2:{
        frame: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
        // frame: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-vn.png",
        video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-vn.m4v",
        h2:"Xem ở mọi nơi.",
        p:"Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV."
    },
    pic2:{
        img:"https://occ-0-58-325.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbtRHxTEgmwtFXR4vBnwSO9UzWSascscH0PRpGcXYVkyVez31FciwrQ4bmD41KIrsypJG4Bf54yOJL82SDLL54SGCIdZov0ySklR.png?r=df6",
        h2: "Tạo hồ sơ cho trẻ em.",
        p:"Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn."
    }
}
function SignUp(){
    return (
        <div className={cx("wrapper-sign-up")}>
            <div className={cx("wrapper-head-sign-up")}>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/d9d1144a-d86f-449b-b110-641145dee09d/VN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt=""/>
                <div className={cx("dark-img")}>
                    <div className={cx("forework")}>
                        <h1>Chương trình truyền hình, phim không giới hạn và <br/> nhiều nội dung khác.</h1>
                        <p>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</p>
                        <h3>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</h3>
                        <InputSignUp />
                    </div>
                </div>
            </div>
            <div className={cx("wrapper-overview")}>
                <OVSignUp frame={ovContent.video1.frame} h2={ovContent.video1.h2} p={ovContent.video1.p} video={ovContent.video1.video} />
                <OVSignUp pic={ovContent.pic1.img} h2={ovContent.pic1.h2} p={ovContent.pic1.p} />
                <OVSignUp frame={ovContent.video2.frame} video={ovContent.video2.video} h2={ovContent.video2.h2} p={ovContent.video2.p} />
                <OVSignUp pic={ovContent.pic2.img} h2={ovContent.pic2.h2} p={ovContent.pic2.p} />
            </div>
            <InputSignUp />
        </div>
    )
}

export default SignUp