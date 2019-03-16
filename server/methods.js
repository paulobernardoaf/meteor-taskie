Meteor.methods({

	adiciona: function(obj) {
		Tarefas.insert({nome: obj.nome, data: new Date(), usuario: this.userId});
	},

	remove: function(obj) {
		Tarefas.remove({_id: obj, usuario: this.userId})
	}

})