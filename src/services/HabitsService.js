
export default class HabitsService {

    data = [
        {
        id: 1,
        title: 'morning run',
        },
        {
            id: 2,
            title: 'read 30 minutes',
        }];

    getHabits() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.75) {
                    reject(new Error('didn`t fetched'))
                } else {
                    resolve(this.data)
                }

            }, 700)
        })
    }
}