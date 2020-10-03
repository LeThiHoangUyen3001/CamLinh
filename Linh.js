import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
        	<div className="container">
        		<div className="text-center">
        			<h1>Quản lý công việc</h1>
        		</div>
        		<div className="row">
        			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        				<div className="panel panel-warning">
               <div className="panel-heading">
                    <h3 className="panel-title">
                        Thêm công việc
                        <span className="fa fa-times-circle text-right"></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Tên công việc</label>
                            <input type="text" className="form-control" name="name"/>
                        </div>
                        <label>Trạng thái</label>
                        <select className="form-control" name="status">
                            <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>Lưu lại
                            </button>
                            <button type="submit" className="btn btn-danger">
                                <span className="fa fa-close mr-5"></span>Hủy bỏ
                            </button>
                        </div>
                    </form>
        		</div>
        			<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        				<button type="button" className="btn btn-primary">
        					<span className="fa fa-plus mr-5"></span>Thêm công việc
        				</button>
        				<div className="row mt-15">
        					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <input type="text" name="keyword" className="form-control" placeholder="Nhập từ khóa tìm kiếm"/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button">
                                            <span className="fa fa-search mr-5"></span>Tìm
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" 
                                        id="dropdownMenu1" 
                                        data-toggle="dropdown" 
                                        aria-haspopup="true" 
                                        aria-expanded="true"
                                    > Sắp xếp
                                        <span className="fa fa-caret-square-o-down ml-5"></span>
                                    </button> 
                                    <ul className="dropdown-menu" arialabelledby="dropdownMenu1">
                                        <li>
                                            <a className="sort-select" role="button">
                                                <span fa fa-sort-alphe-asc pr-5>Tên A-Z</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="sort-select" role="button">
                                                <span fa fa-sort-alphe-asc pr-5>Tên Z-A</span>
                                            </a>
                                        </li>
                                        <li className="devider" role="separator"></li>
                                        <li>
                                            <a role="button"> Trạng thái kích hoạt </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
        				</div>
        				<div className="row mt-15">
        					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        						<table className="table table-bodered table-hover mt-15">
                                    <thead>
                                        <tr>
                                           <th className="text-center">STT</th>
                                            <th className="text-center">Tên</th>
                                            <th className="text-center">Trạng thái</th>
                                            <th className="text-center">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                        <tr>
                                        <td>
                                            <input className="form-control" type="text" name="filterName"/>
                                        </td>
                                        <td>
                                            <select className="form-control" name="filterStatus">
                                                <option value={true}>Tất cả</option>
                                                <option value={false}>Ẩn</option>
                                                <option value={true}>Kích hoạt</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Học React</td>
                                        <td className="text-center">
                                            <span className="label label-danger">Kích hoạt</span>
                                        </td>
                                        <td className="text-center">
                                            <button className="btn btn-warning">
                                                <span className="fa fa-pencil mr-5"></span> Sửa
                                            </button>
                                            <button className="btn btn-warning">
                                                <span className="fa fa-trash mr-5"></span> Xóa
                                            </button>
                                        </td>
                                    </tr>   
                                </table>
	       					</div>
        				</div>
        			</div>	
        		</div>
        	</div>
        );
    }
}

export default App;

