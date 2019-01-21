export default function (identifier, value) {

    let isValid = true;

    switch (identifier) {

        case('firstName'):
        case('secondName'):
            if (value.trim() === '' && isValid) {
                isValid = false;
            }
            break;

        case('email') :
            if (value.trim() === '' && isValid) {
                isValid = false;
            } else {
                const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(value)) {
                    isValid = false;
                }
            }
            break;

        default:

    }

    return isValid
}