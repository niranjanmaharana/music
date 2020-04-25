import { AppConstant } from '../const/app.constant';

export class ErrorResponseHandler {
    public static getResponseMessage(errorStatus: number, errorMsg: string): string {
        let msg: string = '';
        switch(errorStatus) {
            case 0:
                msg = AppConstant.APP_UNAVAILABLE_MSG;
                break;
            case 401:
                msg = AppConstant.UNAUTHORIZED_MSG;
                break;
            case 404:
                msg = AppConstant.RESOURCE_NOT_FOUND_MSG;
                break;
            case 500:
                msg = AppConstant.SERVER_ERROR_MSG;
                break;
            default: 
                msg = errorMsg;
                break;
        }
        return msg;
    }
}