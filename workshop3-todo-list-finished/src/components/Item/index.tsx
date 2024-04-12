import './index.css'

export default function Item() {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>xxxxx</span>
      </label>
      <button className="btn btn-danger" style={{ display: 'none' }}>Delete</button>
    </li>
  )
}