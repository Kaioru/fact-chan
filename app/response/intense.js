if (
    content.includes('kms') ||
    (content.includes('kill') &&
        content.includes('myself')) ||
    ((content.includes('i') ||
        content.includes('commit')) &&
        content.includes('suicide')) ||
    (content.includes('commit') &&
        content.includes('sudoku') || content.includes('seppuku'))
) {
    replies.push('Don\'t be so hard on your self!');
    replies.push('I\'m here for you!!');
}

if (
    content.includes('kys') ||
    (content.includes('kill') &&
    content.includes('yourself'))
) {
    replies.push('Please do not say that!!');
    replies.push('That\'s mean!!');
}