
const selectCardFn = (setUpdateLlists, cardId, cardState, setTempCardState = () => {}) => {
    setUpdateLlists(prev => {
        const idExist = prev.idsArr.indexOf(cardId)
        setTempCardState(!cardState)
        if (idExist !== -1) {
            // Remove project
            return {
                idsArr: prev.idsArr.filter(id => id !== cardId),
                projectAvailabilityArr: prev.projectAvailabilityArr.filter((_, idx) => idx !== idExist)
            };
        } else {
            // Add project
            return {
                idsArr: [...prev.idsArr, cardId],
                projectAvailabilityArr: [...prev.projectAvailabilityArr, !cardState]
            };
        }
    })
}

export default selectCardFn