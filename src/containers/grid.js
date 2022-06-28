import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getObjects from '../actions/objects';
import withTarget from '../actions/target';
import { GRID_VIEW } from  '../constants';

function Grid ({
	objects,
	columns,
	loadObjects
}) {
	useEffect(() => {
		async function awaitItems () {
			await loadObjects();
		}

		awaitItems();
	}, []);

	return (
		<div className="slds-grid">
			<div className="slds-col" data-testid="columns">
				<code>
					<ul>
						{columns.map((column) => <li title={column} key={column}>{column}</li>)}
					</ul>
				</code>
				<code>
					{objects.length ? JSON.stringify(objects) : ''}
				</code>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	const { grid } = state;
	const { ui, data } = grid;
	const { objects } = data;
	const { isLoading, count, columns, fetchError } = ui;

	return {
		objects,
		isLoading,
		columns,
		fetchError,
		count
	};
};

const mapDispatchToProps  = {
	loadObjects: withTarget(getObjects, GRID_VIEW)
};

Grid.propTypes = {
	objects: PropTypes.array.isRequired,
	columns: PropTypes.array.isRequired,
	isLoading: PropTypes.bool,
	loadObjects: PropTypes.func.isRequired,
	fetchError: PropTypes.string
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Grid);
