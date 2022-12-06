import 'material-symbols'
export default function ListCheck({listText,className}) {
    return (
        <li className={className}>
            <span className='material-symbols-outlined d-inline-block h-100 my-auto light-blue fs-4 me-3'>
                priority
            </span>
            {listText}
        </li>
    );
}