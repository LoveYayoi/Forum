import * as React from 'react';
import * as Utility from '../../Utility';
import * as Actions from '../../Actions/UserCenter';
import { UserInfo } from '../../States/AppState';
import { connect } from 'react-redux';
import { RootState } from '../../Store';

const themeList = ['系统默认', '冬季', '春季（浅色）', '春季（深色）'];

interface Props {
    userInfo: UserInfo;
    changeUserInfo: (userInfo: UserInfo) => void;
}

class Theme extends React.Component<Props> {
    handleSubmit = async (theme: number) => {
        try{
            let headers = await Utility.formAuthorizeHeader();
            const url = `/me/theme?id=${theme}`;
            let res = await Utility.cc98Fetch(url, {
                headers,
                method: 'PUT'
            });
            if(!res.ok) {
                throw new Error(res.statusText);
            } else {
                this.props.changeUserInfo({ ...this.props.userInfo, theme: theme });
                Utility.changeTheme(theme);
            }
        } catch(e) {
        }
    }

    render() {
        return (
        <div className="user-theme">
            <div className="user-theme-info"><h2>切换皮肤</h2><p>当前皮肤：{themeList[this.props.userInfo.theme]}</p></div>
            <div className="user-theme-config">
                <button style={{ backgroundColor: '#5198d8'}} key={0} onClick={() => this.handleSubmit(0)} disabled={this.props.userInfo.theme === 0}>系统默认</button>
                <button style={{ backgroundColor: '#79b8ca'}} key={1} onClick={() => this.handleSubmit(1)} disabled={this.props.userInfo.theme === 1}>冬季</button>
                <button style={{ backgroundColor: '#b1d396'}} key={2} onClick={() => this.handleSubmit(2)} disabled={this.props.userInfo.theme === 2}>春季（浅色）</button>
                <button style={{ backgroundColor: '#95b675'}} key={3} onClick={() => this.handleSubmit(3)} disabled={this.props.userInfo.theme === 3}>春季（深色）</button>
                <button style={{ backgroundColor: '#5198d8'}} key={4} onClick={() => this.handleSubmit(4)} disabled={this.props.userInfo.theme === 4}>夏季</button>
            </div>
        </div>
        );
    }
}

function mapState(state: RootState) {
    return {
        userInfo: state.userInfo.currentUserInfo
    };
}

function mapDispatch(dispatch) {
    return {
        changeUserInfo: (userInfo: UserInfo) => {
            dispatch(Actions.changeUserInfo(userInfo));
        }
    };
}

export default connect(mapState, mapDispatch)(Theme);