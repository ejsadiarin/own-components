const storiesArray = [{
  id: 'Ankit', label: "Ankit's Story"
}, {
  id: 'Taylor', label: "Taylor's Story"
},{
  id: 'create', label: 'Create Story'
}]

 function Story({ stories }) {
  return (
    <ul>
      {stories.map((story) => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}

export default function StoryTray() {
  return (
    <Story stories={storiesArray} />
  );
}