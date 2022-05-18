# Database
Firestore Real time database

## Collections
### Items
    - id: Unique ID
    - name: Item name
    - value: Price in dollars
    - description: User text content
    - category
    - condition: 'new' | 'used', potential to add more.
    - created_dtm: Listed date
    - edited_dtm: Last edited date
    - expiry_dtm: Auto remove old ads
    - images: Reference to the storage objects
    - user: Reference to the user
### User
Authentication will be handled by firebase 

    - id
    - displayName: User name
    - email
    - photoURL: url of photo


### Messages
Too much for now probably.
