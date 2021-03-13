import React from "react";
import ForumCard from "../components/ForumCard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ForumPage() {
  return (
    <>
      <h1>ForumPage</h1>
      <Button variant="primary">
        <Link to="/forumCreate">Create Post</Link>
      </Button>
      <ForumCard
        Header="thatguy555"
        Date="12/12/21"
        Title="Gumbo Season"
        Text="Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
      />
      <ForumCard
        Header="cryinonion"
        Date="12/12/21"
        Title="Yellow Onion"
        Text="Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
      />
      <ForumCard
        Header="KeepinItGrapsta"
        Date="12/12/21"
        Title="Heard it through the Grapevine"
        Text="Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini."
      />
    </>
  );
}

export default ForumPage;
