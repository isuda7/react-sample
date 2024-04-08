import React, {Component} from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class IaPages extends Component {
    render() {
        return (
            <div className="ia-wrap">
                <div className='ia-page'>
                    <table>
                        <colgroup>
                            <col style={{width: "80px"}} />
                            <col style={{width: "auto"}} />
                            <col style={{width: "80px"}} />
                            <col style={{width: "80px"}} />
                            <col style={{width: "200px"}} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <td>페이지명</td>
                                <td>구분</td>
                                <td>상태</td>
                                <td>비고</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>
                                    <Link to='/guide/ButtonPage' target='_blank'>가이드 &gt; 버튼페이지</Link>
                                </td>
                                <td>구분</td>
                                <td>상태</td>
                                <td>비고</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>
                                    <Link to='/main' target='_blank'>메인</Link>
                                </td>
                                <td>구분</td>
                                <td>상태</td>
                                <td>비고</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>
                                    <Link to='/domoCate/demoPage' target='_blank'>domoCate  &gt; demoPage</Link>
                                </td>
                                <td>구분</td>
                                <td>상태</td>
                                <td>비고</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default IaPages
