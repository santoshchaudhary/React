import React from 'react'

function Memo({name}) {
    return (
        <div>
            Memo Component {name}
        </div>
    )
}

export default React.memo(Memo)  // React dom should be 16. above for this feature
