import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export function NotifiError(res) {
    if (res.response?.status === 425) {
        toast.error(res.response.data.message);
    } else if (res.response?.data?.errors) {
        Object.values(res.response.data.errors).forEach((msgs) => {
            toast.error(msgs[0]);
        });
    } else {
        toast.error('Có lỗi xảy ra, vui lòng thử lại!');
    }
}

export function NotifiSuccess(res, callback = null) {
    const status = res.data?.status;
    const message = res.data?.message || 'Không rõ thông báo';

    if (status === 1) {
        toast.success(message);
    } else if (status === 0) {
        toast.error(message);
    } else {
        toast.warning(message);
    }

    if (typeof callback === 'function') {
        setTimeout(callback, 200);
    }
}
