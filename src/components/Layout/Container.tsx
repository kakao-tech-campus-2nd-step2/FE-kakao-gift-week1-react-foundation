import './Container.css'

export default function Container(props) {
  const {maxWidth, children, flexDirection, justifyContent, alignItems} = props;
  return (
    <div className="container"
      style={{
        maxWidth: maxWidth,
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
      }}
    >
      { children }
    </div>
  )
}