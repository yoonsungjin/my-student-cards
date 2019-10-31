import React from 'react';
import './InputTag.css';

class InputTag extends React.Component {
    constructor() {
        super();

        this.state = {
            tags: []
        };
    }

    inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            this.setState({ tags: [...this.state.tags, val] });
            this.tagInput.value = null;
        }
    }

    render() {
        const { tags } = this.state;

        return (
            <div className="input-tag">
                <ul className="input-tag__tags">
                    {tags.map((tag, i) => (
                        <li key={tag}>
                            {tag}
                        </li>
                    ))}
                    <li className="input-tag__tags__input">
                        <input className="add-tag-input"
                            placeholder="Add a tag"
                            type="text"
                            onKeyDown={this.inputKeyDown}
                            ref={c => { this.tagInput = c; }} />
                    </li>
                </ul>
            </div>
        );
    }
}

export default InputTag;
