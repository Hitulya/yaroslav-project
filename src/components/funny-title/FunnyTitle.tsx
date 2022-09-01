import React from "react";
import { transformTitleWithSomeFun } from "../../utils/TitleFunnyTransformer";

export interface FunnyTitleProps {
    title: string;
    setTitle: Function;
}

export class FunnyTitle extends React.Component {
    constructor(public props: FunnyTitleProps) {
        super(props);
    }

    render(): React.ReactNode {
        return <title>{this.props.title}</title>
    }

    componentDidMount() {
        transformTitleWithSomeFun(this.props.title, this.props.setTitle, 0);
    }
}