import main from '../../lib/mongodb'
import kitten from '../../lib/schema'

export default function get_Users(req,res) {
    main().catch(error => console.error(error))

    const create = new kitten({name:'John Smith'})
    create.save().then(() => {
        res.status(200).json(create)
    })

    // res.status(200).json([
    //     {id:1,name:'John Smith'},
    //     {id:2, name:'Jane Doe'}
    // ])
}

// https://www.youtube.com/watch?v=FnOuiDB4JJ8