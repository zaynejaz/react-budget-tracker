import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%', fontSize: '.875rem', opacity: '.6', color: 'rgba(0, 0, 0, 0.87);' }}>
            Try saying
            "<span style={{ fontStyle: 'italic' }}>
                Add {isIncome ? 'Income ' : 'Expense '}
                for ${isIncome ? '100 ' : '50 '}
                in Category {isIncome ? 'Salary ' : 'Food '}
                for {isIncome ? 'Next Monday' : 'Yesterday'}
            </span>
            "
        </div>
    )
}

export default InfoCard
