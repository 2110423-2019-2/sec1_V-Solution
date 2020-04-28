from .models import Comment

def comment_list(store_name):
    data = list()
    entries = Comment.objects.filter(store_name = store_name)
    for entry in entries :
        data.append( {
            'timestamp' : entry.timestamp ,
            'poster_user' : entry.poster_user ,
            'text' : entry.text
            }
        )
    return data

