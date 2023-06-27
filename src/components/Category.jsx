import React from 'react';

import { categories } from '../utils/content';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const Category = ({ selectCategory, setSelectCategory }) => {
    return (
        <div>
            {categories.map(category => (
                <button
                    style={{ backgroundColor: category.name === selectCategory ? '#62bfac31' : 'transparent' }}
                    key={category.name}
                    onClick={() => setSelectCategory(category.name)}
                >
                    <span className="icon">{category.icon}</span>
                    <span className="name">{category.name}</span>
                </button>
            ))}
        </div>
    );
};

export default Category;
