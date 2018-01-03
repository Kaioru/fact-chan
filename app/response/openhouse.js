module.exports = ctx => {
    let client = ctx.client;
    let content = ctx.msg.content;
    let replies = ctx.replies;

    if (content.includes('what')) {
        if (content.includes('course')) {
            replies.push('In the school of ICT, we have a total of 5 diploma courses!\n' +
                '* Animation & 3D Arts,\n' +
                '* Financial Informatics,\n' +
                '* Information Security & Forensics,\n' +
                '* Information Technology and\n' +
                '* Immersive Media & Game Design!');
        }

        if (content.includes('specialization') ||
            content.includes('specialisation') ||
            content.includes('elective')) {
            replies.push('Specialisations are only available in Information Technology diploma courses! We have..\n' +
                '* Business & Data Analytics,\n' +
                '* Cloud Computing,\n' +
                '* Enterprise Solutioning,\n' +
                '* Games Programming,\n' +
                '* Infocomm Sales & Marketing,\n' +
                '* Mobile Business Applications and\n' +
                '* Solutions Architect!')
        }
    }
}
