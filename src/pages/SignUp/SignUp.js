import classNames from "classnames/bind";
import styles from "./SignUp.module.scss"
import InputSignUp from "~/component/InputSignUp/InputSignUp";
import OVSignUp from "~/component/OverviewSignUp/OVSignUp";
import Question from "~/component/Question/Question";
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
const questions = {
    ques1:{
        question: "Netflix là gì?",
        answer:"Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet. Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng. Luôn có những nội dung mới để bạn khám phá và những chương trình truyền hình, phim mới được bổ sung mỗi tuần!"
    },
    ques2:{
        question: "Tôi phải trả bao nhiêu tiền để xem Netflix?",
        answer :" Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một khoản phí cố định hàng tháng. Các gói dịch vụ với mức giá từ 70.000 ₫ đến 260.000 ₫ mỗi tháng. Không phụ phí, không hợp đồng."
    },
    ques3:{
        question: "Tôi có thể xem ở đâu?",
        answer:"Xem mọi lúc, mọi nơi. Đăng nhập bằng tài khoản Netflix của bạn để xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc trên bất kỳ thiết bị nào có kết nối Internet và có cài đặt ứng dụng Netflix, bao gồm TV thông minh, điện thoại thông minh, máy tính bảng, thiết bị phát đa phương tiện trực tuyến và máy chơi game. Bạn cũng có thể tải xuống các chương trình yêu thích bằng ứng dụng trên iOS, Android hoặc Windows 10. Vào phần nội dung đã tải xuống để xem trong khi di chuyển và khi không có kết nối Internet. Mang Netflix theo bạn đến mọi nơi."
    },
    ques4:{
        question: "Làm thế nào để hủy?",
        answer :"Netflix rất linh hoạt. Không có hợp đồng phiền toái, không ràng buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú nhấp chuột. Không mất phí hủy, bạn có thể bắt đầu hoặc ngừng tài khoản bất cứ lúc nào.",
    },
    ques5:{
        question:"Tôi có thể xem gì trên Netflix?",
        answer :"Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội dung khác. Xem không giới hạn bất cứ lúc nào bạn muốn."
    },
    ques6:{
        question:"Netflix có phù hợp với trẻ em không?",
        answer:"Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn, trao cho phụ huynh quyền kiểm soát trong khi các em có thể thưởng thức các bộ phim và chương trình phù hợp cho gia đình tại không gian riêng. Hồ sơ Trẻ em đi kèm tính năng kiểm soát của cha mẹ (được bảo vệ bằng mã PIN), cho phép bạn giới hạn độ tuổi cho nội dung con mình được phép xem, cũng như chặn những phim hoặc chương trình mà bạn không muốn các em nhìn thấy."
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
            <div className={cx("wrapper-question-answer")}>
                <Question question={questions.ques1.question} answer={questions.ques1.answer} />
                <Question question={questions.ques2.question} answer={questions.ques2.answer} />
                <Question question={questions.ques3.question} answer={questions.ques3.answer} />
                <Question question={questions.ques4.question} answer={questions.ques4.answer} />
                <Question question={questions.ques5.question} answer={questions.ques5.answer} />
                <Question question={questions.ques6.question} answer={questions.ques6.answer} />
            </div>
            <div className={cx("wrapper-sign-up-2")}>
                <div className={cx("aaa")}>
                    <h3>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</h3>
                        <InputSignUp />
                </div>
            </div>
        </div>
    )
}

export default SignUp