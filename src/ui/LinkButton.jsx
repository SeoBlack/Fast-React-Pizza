/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function LinkButton({children, to}) {
    const navigate = useNavigate();
    const classes = "text-sm text-blue-500 hover:text-blue-600"

    if(to === "-1") return <button onClick={() => navigate(-1)} className={classes}>{children}</button>
  return (
    <Link className={classes} to={to}>{children}</Link>
  )
}
