import { Link, useRouteLoaderData, Form, useContext, useNavigate } from "react-router-dom";
import './Header.css';
import {React, useState, useEffect} from "react";
import LoginModal from "../pages/LoginModal";
import {useRef} from 'react';
import PopconB from '../image/store_image/PopconB.png';
import popcon_logo3 from '../image/store_image/popcon_logo3.png';

function Header() {

    const navigate = useNavigate();  // useNavigate 훅 사용
    const [isManager, setIsManager] = useState(false);
    
    useEffect(() => {
        const role = localStorage.getItem('customerRole');
        setIsManager(role === 'true'); 
    }, []);
    
    const token = useRouteLoaderData('tokenRoot');
    console.log("MainNavigation.token", token);

    const modalRef = useRef(null);

    function show_modal(){
        modalRef.current.modal_open();
    }

    // MyPage 모달을 보여주는 함수
    function show_mypageModal() {
        const customerIdx = localStorage.getItem('customerIdx'); // customerIdx를 가져옵니다.
        if (!customerIdx) {
            console.log('로그인이 필요합니다.');
            show_modal(); // 로그인 모달을 띄웁니다.
        } else {
            navigate('/MyPage');
        }
    }

    return (
        <header>
            <div className="header-container">

                {/* 일반 헤더 */}
                {!isManager && <>
                <div className="header-top-box flex-sb">
                    <Link to="/">
                        <div className="header-logo flex-c">
                            <img src={PopconB} alt=""/>
                            <img src={popcon_logo3} alt=""/>
                        </div>
                    </Link>
                    <div className="header-mymenu flex-sa">

                        { !token && 
                            <button className="btn btn-success" onClick={show_modal}>로그인</button>
                        }

                        { token && <Form action="/logout" method="post">
                                <button className='btn btn-success' >로그아웃</button>
                            </Form>
                        }
                        
                        
                        <Link to="/faq">고객센터</Link>
                        <LoginModal ref={modalRef}/>
                    </div>
                </div>
                <div className="header-bottom-box">
                    <div className="header-search-box flex-c">
                        <input type="text"/>
                    </div>
                    <nav>
                        <ul className="flex-c">
                            <li><Link to="/Sku">상품보기</Link></li>
                            <li><Link to="/sku1">1 + 1</Link></li>
                            <li><Link to="/sku2">2 + 1</Link></li>
                            <li><a href="#" onClick={show_mypageModal}>마이페이지</a></li> {/* MyPage로 이동 또는 로그인 모달 표시 */}
                        </ul>
                    </nav>
                </div>
                </>}

                {/* 관리자 헤더 */}
                {isManager && <>
                <div className="header-top-box flex-sb">
                    <Link to="/">
                        <div className="header-logo flex-c">
                            <img src={PopconB} alt=""/>
                            <img src={popcon_logo3} alt=""/>
                        </div>
                    </Link>
                    <div className="header-mymenu flex-sa">

                        { !token && 
                            <a href="#" onClick={show_modal}>로그인</a>
                        }

                        { token && <Form action="/logout" method="post">
                                <button className='btn btn-success' >로그아웃</button>
                            </Form>
                        }
                        
                        
                        <Link to="/allInquiries">고객문의</Link>
                        <LoginModal ref={modalRef}/>
                    </div>
                </div>
                <div className="header-bottom-box">
                    <div className="header-search-box flex-c">
                        <input type="text"/>
                    </div>
                    <nav>
                        <ul className="flex-sa">
                            <li><Link to="/Sku">상품보기</Link></li>
                            <li><Link to="/sku2">1 + 1!</Link></li>
                            <li><Link to="/sku2">2 + 1!</Link></li>
                        </ul>
                    </nav>
                </div>
                </>}

            </div>
        </header>
    );
}

export default Header;
