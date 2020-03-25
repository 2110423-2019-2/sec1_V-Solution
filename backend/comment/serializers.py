from .models import Comment

def comment_list(store_name):
    data = list()
    entries = Comment.objects.filter(store_name = store_name)
    entries.sort()
    for entry in entries :
        data.append( {
            'timestamp' : str(entry.timestamp) ,
            'poster_user' : str(entry.poster_user) ,
            'text' : str(entry.text)
            }
        )
    
    return data
